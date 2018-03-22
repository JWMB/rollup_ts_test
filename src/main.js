import axios from 'axios';

export class Main {
    static test(text) {
        window.process = window.process || { env: {} };
        axios.get("http://httpbin.org/").then(response => alert("" + text + " " + response.data.length));
    }
}