import React, {
  Component,
  StyleSheet,
  View,
  ToolbarAndroid,
} from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'

import General from './General'
import Chart from './Chart'
import Account from './Account'
import Me from './Me'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'stretch',
  },
  toolbar: {
    height: 56,
    backgroundColor: 'blue',
  },
})

class MainScreen extends Component {
  render() {
    return (
      <View style={styles.root}>
        <ToolbarAndroid
          style={styles.toolbar}
          title="Spendless"
        />
        <ScrollableTabView>
          <General tabLabel="总览" />
          <Chart tabLabel="报表" />
          <Account tabLabel="账户" />
          <Me tabLabel="我" />
        </ScrollableTabView>
      </View>
    )
  }
}

export default MainScreen