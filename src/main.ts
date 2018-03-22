import axios from "axios";

export class Main {
    public static test(text: string) {
        (<any>window).process =(<any>window).process || { env: {} };
        axios.get("http://httpbin.org/").then(response => alert("" + text + " " + response.data.length));
    }
}