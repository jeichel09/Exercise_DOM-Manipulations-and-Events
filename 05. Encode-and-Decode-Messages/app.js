function encodeAndDecodeMessages() {
    let encodeBtn = document.getElementsByTagName('button')[0];
    encodeBtn.addEventListener('click', encode);

    let decodeBtn = document.getElementsByTagName('button')[1];
    decodeBtn.addEventListener('click', decode);

    function encode() {
        let encodedMessage = '';
        let msgToEncode = document.getElementsByTagName('textarea')[0].value;
        for (let c = 0; c < msgToEncode.length; c ++) {
            encodedMessage += String.fromCharCode((msgToEncode.charCodeAt(c)) + 1);
        }
        document.getElementsByTagName('textarea')[1].value = encodedMessage;
        document.getElementsByTagName('textarea')[0].value = '';
    }

    function decode() {
        let msgToDecode = document.getElementsByTagName('textarea')[1].value;
        let decodedMessage = '';
        for (let c = 0; c < msgToDecode.length; c ++) {
            decodedMessage += String.fromCharCode((msgToDecode.charCodeAt(c)) - 1);
        }
        document.getElementsByTagName('textarea')[1].value = decodedMessage;
    }
}