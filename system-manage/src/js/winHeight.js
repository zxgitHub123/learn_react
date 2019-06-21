import $ from 'jquery';
function winHeight(config={}){
    return $(window).height()-(config.offset || 0)
}
export default winHeight;