const button = document.querySelector(".upload");
const image = document.querySelector(".logo");
const taskButton = document.querySelector(".taskbutton");

button.addEventListener("click", () => {
    const apiKey = "AcVfazSkJQCiFlLIvAWqAz";
    const client = filestack.init(apiKey);
    const options = {
        onUploadDone: (uploadResponse) => {
            console.log("onUploadDone", uploadResponse);
            image.setAttribute("src", uploadResponse.filesUploaded[0].url);
        },
    };
    client.picker(options).open();
});

