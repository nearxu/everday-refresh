const PAGE_POSITION_SESSION = 'PAGE_POSITION_SESSION';

class PagePositionSession {
  constructor(path) {
    this.path = path;
  }

  getAllSession() {
    return session.get(PAGE_POSITION_SESSION) || {};
  }

  find() {
    const pagePositionSession = this.getAllSession();
    return pagePositionSession[this.path];
  }

  save() {
    const height = window.scrollY;
    // if (!height) return;
    const pagePositionSession = this.getAllSession();
    session.set(PAGE_POSITION_SESSION, {
      ...pagePositionSession,
      [this.path]: height
    });
  }

  clear() {
    const sessions = this.getAllSession();
    delete sessions[this.path];
    session.set(PAGE_POSITION_SESSION, sessions);
  }

  recovery() {
    const height = this.find();
    if (typeof height === 'undefined') return;
    window.scroll(0, height);
  }
}

const pageSession = new PagePositionSession(window.location.pathname);
class index extends Component{
    constructor(props){
        super(props);
        this.clearSessionHandle = () => {
            pageSession.clear();
          };
    }
    componentDidMount(){
        // s首次加载
        window.addEventListener('beforeunload', this.clearSessionHandle);
    }
    componentWillUnmount() {
        pageSession.save();
      }
    getData() {
        http.get(URL)
        .then(res => {

        })
        .then(() => {
            pageSession.recovery(); // 滚动位置
        })
    }
}
