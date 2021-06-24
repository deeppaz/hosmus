import React, { Component } from 'react'
import Vibrant from 'node-vibrant'
import axios from 'axios';
import Swatches from '../Swatches/Swatches';
import './style.css';
import { randomApis, base_url } from '../api/api';

import Skeleton from '../Skeleton/Skeleton';

class Hosmus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            showSwatch: false,
            loadingSkeleton: true,
            swatches: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //Get a new random image
    handleSubmit(event) {
        event.preventDefault();
        this.componentDidMount();
    }

    //Get random image from unsplash
    componentDidMount() {
        this.getRandomImage();
        setInterval(() => {
            this.setState({ loadingSkeleton: false })
        }, 5000);
    }

    getRandomImage = () => {
        axios.get(base_url + '/?client_id=' + randomApis)
            .then(result => {
                this.setState({
                    showSwatch: false,
                    image: result.data,
                    loadingSkeleton: true
                })
                this.findSwatches();
            })
            .catch(error => {
                console.log('Error getting image: ' + error);
            });
    };

    //Use Vibrant to find images colours
    findSwatches = () => {
        Vibrant.from(this.state.image.urls.raw)
            .getSwatches()
            .then(data => {
                let swatchData = [];
                let swatchCount = 0;
                for (let swatch in data) {
                    swatchData.push({
                        'swatch': data[swatch].getHex(),
                        'index': swatchCount
                    });
                    swatchCount++;
                }
                this.setState({
                    showSwatch: true,
                    swatches: swatchData,
                });
            })
            .catch(error => {
                console.log('Error processing image: ' + error);
            });
    }
    render() {
        return (
            this.state.loadingSkeleton ? (
                <Skeleton/>
            ) : (
                    <div className="hosmusBody">
                        {this.state.swatches[0] && (
                            <div>
                                <button
                                    style={{ backgroundImage: `repeating-linear-gradient(90deg,${this.state.swatches[0].swatch},${this.state.swatches[1].swatch} 20%,${this.state.swatches[2].swatch} 32%,${this.state.swatches[3].swatch} 48%,${this.state.swatches[4].swatch} 68%,${this.state.swatches[5].swatch} 84%,${this.state.swatches[0].swatch} 100%)` }}
                                    onClick={() => this.getRandomImage()}
                                >
                                    New Palette
                            </button>
                            <style>{`body {background-color: ${this.state.swatches[1].swatch}`}</style>
                            </div>
                        )}

                        <div id="container">
                            {this.state.image && (
                                <div className="paletteImage">
                                    <img id="img" src={this.state.image.urls.raw + '&w=960'} srcSet={`${this.state.image.urls.raw + '&w=960'} 1x, ${this.state.image.urls.raw + '&w=1920'} 2x`} alt={this.state.image.alt_description} />
                                </div>
                            )}

                            {this.state.showSwatch && (
                                <Swatches swatches={this.state.swatches} />
                            )}
                        </div>
                    </div>
                )

        )
    }
}

export default Hosmus
