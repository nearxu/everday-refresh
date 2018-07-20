{
    path: 'home/:userId',
    getComponent(nextState, cb) {
      import('./pages/home').then(component => cb(null, component.default));
    },
    indexRoute: {
      getComponent(nextState, cb) {
        import('./pages/record').then(component =>
          cb(null, component.default)
        );
      }
    },
    childRoutes: [
      {
        path: 'group',
        getComponent(nextState, cb) {
          import('./pages/group').then(component =>
            cb(null, component.default)
          );
        }
      }
    ]
  }

  <div className="group-home-tab">
  <ul>
    <li>
      <button onClick={ () => this.goPage(userPagePath) }>
        合买战绩
      </button>
    </li>
    <li>
      <button onClick={ () => this.goPage(userPagePath + '/group') }>
        当前合买
      </button>
    </li>
  </ul>
</div>
<div className="group-content">{this.props.children}</div>