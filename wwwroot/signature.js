window.signature = {
    isDrawing: false,
    context: null,
    startDrawing: function (canvasId) {
        const canvas = document.getElementById(canvasId);
        this.context = canvas.getContext("2d");

        canvas.addEventListener("mousedown", () => {
            this.isDrawing = true;
        });

        canvas.addEventListener("mouseup", () => {
            this.isDrawing = false;
            this.context.beginPath();
        });

        canvas.addEventListener("mousemove", (event) => {
            if (!this.isDrawing) return;

            this.context.lineWidth = 2;
            this.context.lineCap = "round";
            this.context.strokeStyle = "black";

            const rect = canvas.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            this.context.lineTo(x, y);
            this.context.stroke();
            this.context.beginPath();
            this.context.moveTo(x, y);
        });
    },
    saveCanvas: function (canvasId) {
        const canvas = document.getElementById(canvasId);
        return canvas.toDataURL("image/png");
    },
    clearCanvas: function (canvasId) {
        const canvas = document.getElementById(canvasId);
        const context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);
    }
};