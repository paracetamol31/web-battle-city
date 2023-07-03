class Point {
    private coordinateX: number = 0;
    private coordinateY: number = 0;

    constructor(
        coordinateX: number = 0,
        coordinateY: number = 0
    ) {
        this.coordinateX = coordinateX;
        this.coordinateY = coordinateY;
    }

    //акцессоры для X

    get x(): number {
        return this.x;
    }

    set x(coordinateX: number) {
        this.x = coordinateX;
    }

    //акцессоры для Y

    get y(): number {
        return this.y;
    }

    set y(coordinateY: number) {
        this.y = coordinateY;
    }
}

export { Point }