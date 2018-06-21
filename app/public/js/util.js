
const e = a => document.querySelector(a)


const es = a => document.querySelectorAll(a)


const bindEvent = (target, eventName, callback) => {
    target.addEventListener(eventName, callback)
}
