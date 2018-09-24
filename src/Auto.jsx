// import React, {Component} from 'react';
// import AutoComplete from 'material-ui/AutoComplete'
// import getMuiTheme        from 'material-ui/styles/getMuiTheme';
// import MuiThemeProvider   from 'material-ui/styles/MuiThemeProvider';

// class Auto extends Component {
//   constructor(props) {
//     super(props);
//     this.onUpdateInput = this.onUpdateInput.bind(this);
//     this.state = {
//       dataSource : ['alpha', 'bravo', 'charlie', 'delta', 'echo', 'foxtrot', 'golf', 'hotel', 'india', 'juliett', 'kilo', 'lima', 'mike', 'november', 'oscar', 'pap', 'quebec', 'romeo', 'sierra', 'tango', 'uniform', 'victor', 'whiskey', 'x-ray', 'yankee', 'zulu'],
//       inputValue : ''
//     }
//   }

//   onUpdateInput(inputValue) {
//     this.setState({
//       inputValue: inputValue
//     })
//   }

//   render() {
//     return <MuiThemeProvider muiTheme={getMuiTheme()}>
//       <AutoComplete
//         dataSource    = {this.state.dataSource}
//         onUpdateInput = {this.onUpdateInput} />
//       </MuiThemeProvider>
//   }
// }
// export default Auto;