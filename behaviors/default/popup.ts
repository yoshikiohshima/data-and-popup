import { PawnBehavior } from "../PrototypeBehavior";
class PopupActor {
    setup() {
        this.listen("togglePopup", "togglePopup");
        this.listen("dataLoaded", "dataLoaded");
    }

    dataLoaded(data) {
        console.log("actor received data", data);
        this.data = data;
    }

    togglePopup() {
        if (this.popup) {
            this.popup.destroy();
            delete this.popup;
            return;
        }

        // Creating card config remains the same as in your existing 'pressed' function

        let color = 0xff0000;
        if (this.data && this.data.age === 5) {
            color = 0x00ff00;
        }

        this.popup = this.createCard({
            translation: [0, 3, -10],
            scale: [3, 3, 3],
            layers: ["pointer"],
            cornerRadius: 0.02,
            fullBright: true,
            modelType: "img",
            shadow: true,
            singleSided: true,
            color: color,
            textureLocation:
            "3IaRkQ1Yvi5PSCeIb5o7LYLS96iFCmDs9rP5v-ieTfaMIT09OTpzZmYvICUsOmc8OmcqOyY4PCw9ZyAmZjxmMxw9PhkGMw88Bhp4AiAuBBMgfHpwMQ8NDnF5e2YgJmcqOyY4PCw9ZyQgKjsmPyw7OixnJSYqKCUtLD8tLC8oPCU9Zh5kLgUAGDx9MCwzBSt6eBAwBRo4HX8cPTkRAhwePn8kCGQ9HyckKw8OC31mLSg9KGY5fy8HeRENESd9cXsnHAwiBi56ECoeEygrLyEkBSY8cTAjMBMPPC0wAyUE",
            textureType: "image",
            type: "2d",
        });
    }
}

class PopupPawn extends PawnBehavior {
    setup() {
        this.addEventListener("pointerTap", "pointerTap");
        this.listen("handleElected", "handleElected");
        this.listen("handleUnelected", "handleUnelected");
        this.say("electionStatusRequested");
    }

    pointerTap() {
        this.say("togglePopup");
    }

    handleElected(data) {
        if (!data || data.to === this.viewId) {
            this.fetchData();
        }
    }

    handleUnelected() {}

    fetchData() {
        console.log("Fetching user data...");
        return fetch("https://test-back-one.vercel.app/api/v1/get")
            .then((response) => response.json())
            .then((userData) => {
                const user = userData.users[0];
                console.log("Fetched user data:", user);

                this.say("dataLoaded", user);
            })
            .catch((error) => {
                console.error("Error fetching user data:", error);
            });
    }
}

export default {
    modules: [
        {
            name: "Popup",
            actorBehaviors: [PopupActor],
            pawnBehaviors: [PopupPawn],
        },
    ],
};
