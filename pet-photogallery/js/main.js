window.onload = function () {
    //                          ES5
    // new Slider({
    //     images: '.gallery .photo img',
    //     next: '.gallery .tabs .next',
    //     prev: '.gallery .tabs .prev',
    //     interval: '3000'
    // })


    // function Slider(obj) {
    //     this.images = document.querySelectorAll(obj.images)
    //     this.btNext = document.querySelector(obj.next)
    //     this.btPrev = document.querySelector(obj.prev)
    //     this.interval = obj.interval

    //     var i = 0

    //     this.next = function () {
    //         console.log(this)
    //         this.images[i].className = ""
    //         i++
    //         if (i >= this.images.length) {
    //             i = 0
    //         }
    //         this.images[i].className = "shown"
    //     }


    //     this.prev = function () {
    //         console.log(this);
    //         this.images[i].className = ""
    //         i--
    //         if (i < 0) {
    //             i = this.images.length - 1
    //         }
    //         this.images[i].className = "shown"
    //     }



    //     this.btNext.addEventListener('click', this.next.bind(this))
    //     this.btPrev.addEventListener('click', this.prev.bind(this))

    //     setInterval(this.next.bind(this), this.interval)
    // }

    //                          ES6
    class Slider {
        constructor(obj) {
            this.images = document.querySelectorAll(obj.images)
            this.btNext = document.querySelector(obj.next)
            this.btPrev = document.querySelector(obj.prev)
            this.interval = obj.interval
            this.i = 0
            this.btNext.addEventListener('click', this.next.bind(this))
            this.btPrev.addEventListener('click', this.prev.bind(this))
            setInterval(this.next.bind(this), this.interval)
        }

        next() {
            this.images[this.i].className = ""
            this.i++
            if (this.i >= this.images.length) {
                this.i = 0
            }
            this.images[this.i].className = "shown"
        }


        prev() {
            this.images[this.i].className = ""
            this.i--
            if (this.i < 0) {
                this.i = this.images.length - 1
            }
            this.images[this.i].className = "shown"
        }
    }
    new Slider({
        images: '.gallery .photo img',
        next: '.gallery .tabs .next',
        prev: '.gallery .tabs .prev',
        interval: '5000'
    })

}