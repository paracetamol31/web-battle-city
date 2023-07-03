import { BaseStaticObject } from "../engineInternal";
import { MainPlayer } from "../gameObjects/dynamicObjects/mainPlayer/MainPlayer";
import { defaltTimerValue30Frames } from "./Private";

class Engine {
    private _engineInstance: Engine | null = null;
    private staticObjects: Array<BaseStaticObject> = [];
    private dynamicObjects: Array<BaseStaticObject> = [];
    private mainPlayer: MainPlayer = new MainPlayer();
    private mainGameInterval: NodeJS.Timer;
    private interval: number = defaltTimerValue30Frames;
    private _mainСycleBody: Function = async () => { };

    private constructor() {
        this.dynamicObjects.push(this.mainPlayer);
    }

    get engineInstance(): Engine {
        if (!this._engineInstance) {
            this._engineInstance = new Engine();
        }
        return this._engineInstance;
    }

    /** Запуск основного цикла игры. */
    public start(): void {
        this.mainGameInterval = setInterval(async () => {
            await this.mainСycleBody.apply(this);
        }, this.interval);
    }

    /** Остановка основного цикла игры. */
    public stop(): void {
        clearInterval(this.mainGameInterval);
    }

    get mainСycleBody(): Function {
        return this._mainСycleBody;
    }

    set mainСycleBody(mainСycleBody: Function) {
        this._mainСycleBody = mainСycleBody;
    }
}

export { Engine };