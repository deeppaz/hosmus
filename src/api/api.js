const id =
    [
        'hdA9aneAOButPvpx_J56ickOhE5H_MyJCdvao3XMaGo',
        'EEEgGplDzD_rhmIum7skhws-rfIQKW9_4ULGSUqj1vE',
        'rHMGOZGKA0ivmiEOs_E-5II4sdSFOAyJCf3qs9-qknI',
        'UHwV_XEEqOPR0PKFb4hqRmH8zmTa3gLUfq9G90IkMAw',
        'Mjp23AYzZ49XsJBL1ymvTNcnlCgmUgZ3uzG8iG6_KiA',
        '764uPK-ocveRQ__hrkUjxrYoMYLYTmSOk5g5iRD0Apc',
        '7C4usvpFsOJKmcOLOS01tAFsvmT0XYPqPiJCsVXO63w',
        '6gIXP6n7p-eCzSMZA2_CAGzs9zAZhYfQnsyhrx9ExSw',
        '-1TlR5ilCxYZy7zmaXY0jaMYf9OJJ6h8x6c5mI7uWt4',
        'gvcXr2-4Z4gs9HHK3pQ_TqoMBDzuJ_JKlnhxDAsPCTc'
    ]

export const randomApis = id.sort(() => Math.random() - Math.random()).find(() => true);

export const base_url = 'https://api.unsplash.com/photos/random'
