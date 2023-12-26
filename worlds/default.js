// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io

export function init(Constants) {
    Constants.AvatarNames = ["newwhite"];

    /* Alternatively, you can specify a card spec for an avatar,
       instead of a string for the partical file name, to create your own avatar.
       You can add behaviorModules here. Also, if the system detects a behavior module
       named AvatarEventHandler, that is automatically installed to the avatar.
        {
            type: "3d",
            modelType: "glb",
            name: "rabbit",
            dataLocation: "./assets/avatars/newwhite.zip",
            dataRotation: [0, Math.PI, 0],
            dataScale: [0.3, 0.3, 0.3],
        }
    */

    Constants.UserBehaviorDirectory = "behaviors/default";
    Constants.UserBehaviorModules = [
        "lights.js", "popup.ts"
    ];

    Constants.DefaultCards = [
        {
            card: {
                name:"world model",
                layers: ["walk"],
                type: "3d",
                singleSided: true,
                shadow: true,
                translation:[0, -1.7, 0],
                placeholder: true,
                placeholderSize: [400, 0.1, 400],
                placeholderColor: 0xe0e0e0,
                placeholderOffset: [0, 0, 0],
            }
        },
        {
            card: {
                name: "light",
                layers: ["light"],
                type: "lighting",
                behaviorModules: ["Light"],
                dataLocation: "3OF2-s4U1ZOJduGATmLEIXo1iTkQHd5ZBknKgL5SvqpQJzs7Pzx1YGApJiMqPGE6PGEsPSA-Oio7YSYgYDpgCCsZLTYjBjwOJB4sDRcrfAg3Ljk2OBoEGBYWfWAmIGEsPSA-Oio7YSImLD0gOSo9PCpgPwB9AAIIISx8YiYneScqKyQaIisNLHkaGT8YKg56JQwQfHstPiNiGQ49e2ArLjsuYCMBPgMiCQt3OQskGhcleSp9HQIIfXseHgo7EAo9CB48FRwpegsCLH4OIwY",
                fileName: "/abandoned_parking_4k.jpg",
                dataType: "jpg",
                toneMappingExposure: 1.2
            }
        },
        {
            card: {
                translation: [0, 0.3, -8],
                scale: [4, 4, 4],
                rotation: [0, 0, 0, 1],
                layers: ["pointer"],
                behaviorModules: ["Elected", "Popup"],
                name: "/arrow.png",
                cornerRadius: 0.02,
                fileName: "/arrow.png",
                fullBright: true,
                modelType: "img",
                shadow: true,
                singleSided: true,
                textureLocation: "3BK7IuwUDJyf_snN-xAMgFkLd91Z_Op-9rwQZ-tm_J9AKjY2MjF4bW0kKy4nMWw3MWwhMC0zNyc2bCstbTdtOBc2NRINOAQ3DRFzCSslDxgrd3F7OgQGBXpycG0rLWwhMC0zNyc2bC8rITAtNCcwMSdsLi0hIy4mJzQmJyQjNy42bQMlG3Y0cx0NdRt7EXYjOhAPGAFxBjEsE3sMNhALdS86I3cvOg1yBAp7KiltJiM2I20wMBYzFBYUBTA7cAosBCgYMnJ1NCwNMRgAMAwKKhMOcXEvACcOKTEvEgE1",
                textureType: "image",
                type: "2d",
            }
        }
    ];
}
