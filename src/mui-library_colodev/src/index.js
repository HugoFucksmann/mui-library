import AwesomeButton from  './button.js'
import BtnScroll from './helper/btnScrollToTop.js'

const returnLibrary = () => {
    return {
        AwesomeButton: AwesomeButton,
        BtnScroll: BtnScroll
        // you can add here other components that you want to export
    }
}
export default returnLibrary()