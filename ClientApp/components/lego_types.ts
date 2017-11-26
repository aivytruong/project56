export type Lego = {
    item_Number : string
    name : string
    year : string
    theme : string
    subtheme : string
    pieces : string
    minifigures : string
    image_URL : string
    gBP_MSRP : string
    uSD_MSRP : string
    cAD_MSRP : string
    euR_MSRP : string
    packaging : string
    availability : string
}

export type Users = {
    userName : string
    firstName : string
    lastName : string
    password: string
    emailAdress : string 
    adress : string
    phoneNumber : string
    country : string
    date_of_birth: string
    gender : string
}

export type Admins = {
    username : string
    email : string 
    password : string
}