function analyzeCarMileage(array) {
   const totalMileage = array.reduce((sum, cars)=> sum += cars.mileage,0)
   const averageMileage = totalMileage / array.length;
   const highestMileageCar = array.sort((a,b)=> b.mileage - a.mileage)[0]
    const lowestMileageCar = array.sort((a,b)=> a.mileage - b.mileage)[0]
    return {
        averageMileage: parseFloat(averageMileage.toFixed(2)),
        highestMileageCar,
        lowestMileageCar,
        totalMileage
    }
}

module.exports = analyzeCarMileage;
