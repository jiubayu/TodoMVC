import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import classnames from 'classnames'

export default class Footer extends Component {

  onClearCompletedHandler = () => {
    this.props.onClearCompleted()
  }

  render () {
    const { activeCount, completedCount } = this.props
    const itemWord = activeCount === 1 ? 'item' : 'items'
    return (
      <View className='footer'>
        <Text className='todo-count'>
          {activeCount || 'No'}{' '}{itemWord} left
        </Text>
        {
          !!completedCount &&
          <View
            className='clear-completed'
            onClick={this.onClearCompletedHandler}
          >Clear completed</View>
        }
      </View>
    )
  }
}
