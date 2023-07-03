import { Point } from "../../../internal";

class BaseGameObject {
    private _anchorPoint: Point = new Point();
    private _width: number = 0;
    private _height: number = 0;

    //акцессоры для _anchorPoint

    get anchorPoint(): Point {
        return this._anchorPoint;
    }

    set anchorPoint(point: Point) {
        this._anchorPoint = point;
    }

    //акцессоры для _width

    get width(): number {
        return this._width;
    }

    set width(width: number) {
        this._width = width;
    }

    //акцессоры для _height

    get height(): number {
        return this._height;
    }

    set height(height: number) {
        this._height = height;
    }
}

export { BaseGameObject }