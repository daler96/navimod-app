export interface cargoDetailsFormat {

    id: number,
    mode: string,
    movementType: string,
    incoterm: string,
    originCountry: string,
    originCity: string,
    destinationCountry: string,
    destinationCity: string,
    zipCode: number,
    packageType: string,
    quantity: number,
    volume: number,
    volumeUnit: string,
    weight: number,
    weightUnit: string,
    cargoDescription: string,
    currency: string,
    hazardousMaterial: string,
    eventCargo: string,
    personalGoods: string

}