import {makeAutoObservable} from "mobx";
import {CountryInfo, getCountryByName} from "../../../api/apiService";

export class AutocompleteControlModel {
    isLoading: boolean = false;
    hintsCount: number = 10;
    text: string = '';
    hints : Array<CountryInfo> = [];
    lastPromiseTimestamp: string = '';
    showHints: boolean = false;

    constructor() {
        makeAutoObservable(this)
    }

    setMaxHintCount = (hintCount: number)=>{
        this.hintsCount = hintCount;
    }

    setText =(text: string) => {
        this.text = text;
    }

    fetchHints = async ()=> {
        const timeStamp = Date.now().toString()

        if (!this.text) {
            this.hints = []
            this.lastPromiseTimestamp = timeStamp
            this.isLoading = false
            return
        }

        this.isLoading = true

        try {
            this.lastPromiseTimestamp = timeStamp
            const resp = await getCountryByName(this.text);

            if (this.lastPromiseTimestamp === timeStamp) {
                this.hints = resp.slice(0, this.hintsCount)
            }
        } catch (err) {
            this.hints = []
        } finally {
            this.isLoading = false
        }
    }

    setShowHints = (showHints: boolean)=> {
        this.showHints = showHints;
    }
}

