var car = {
    color: 'white',
    model: 'K5',
    moveHistory: [],
    totalMove: 0,
    getTotalMove: function() {
        return this.totalMove;
    },
    move: function(km) {
        this.moveHistory.push(km);
        this.totalMove += km;
    }
};

car.move(56);
car.move(400);
car.move(-10);

console.log(`주행내역: ${car.moveHistory}`);
console.log(`총 주행거리: ${car.totalMove} km`);
console.log(`총 주행거리: ${car.getTotalMove()} km`);
