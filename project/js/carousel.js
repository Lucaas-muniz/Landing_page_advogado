function Carousel(config){
    this.container = (typeof config.container === 'string') ?
    document.querySelector(config.container) : config.container

    this.itens = (typeof config.itens === 'string') ?
    this.container.querySelectorAll(config.itens) : config.itens

    this.btnPrev = (typeof config.btnPrev === 'string') ?
    this.container.querySelector(config.btnPrev) : config.btnPrev

    this.btnNext = (typeof config.btnNext === 'string') ?
    this.container.querySelector(config.btnNext) : config.btnNext

    var _this = this;

    init()

    function init(){
        var _show = _this.container.querySelectorAll('.show')

        Array.prototype.forEach.call(_show, function(sh){
            sh.classList.remove('show')
        })
    }
}