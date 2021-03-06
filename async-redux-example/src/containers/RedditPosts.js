import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
  selectReddit,
  fetchPostsIfNeeded,
  invalidateReddit
} from '../actions'
import Picker from '../components/Picker'
import Posts from '../components/Posts'

class RedditApp extends Component {
  componentDidMount() {
    const { dispatch, selectedReddit} = this.props
    dispatch(fetchPostsIfNeeded(selectedReddit))
  }
  
  componentWillReceiveProps(nextProps) {
    console.log('vaoooooooo')
    
    if (nextProps.selectedReddit !== this.props.selectedReddit) {
      console.log('vaoooooooo')
      const { dispatch, selectedReddit } = nextProps
      dispatch(fetchPostsIfNeeded(selectedReddit))
    }
  }

  handleChange = nextReddit => {
    this.props.dispatch(selectReddit(nextReddit))
  }

  handleRefreshClick = e => {
    e.preventDefault()

    const { dispatch, selectedReddit } = this.props
    dispatch(invalidateReddit(selectedReddit))
    dispatch(fetchPostsIfNeeded(selectedReddit))
  }

  render() {
    const { selectedReddit, posts, isFetching, lastUpdated} = this.props
    const isEmpty = posts.length === 0

    return (
      <div>
        <Picker 
          value={selectedReddit}
          onChange={this.handleChange}
          options={[{name: 'Reactjs', value: 'reactjs'}, {name: 'Frontend', value: 'frontend'}]}
        />
        <p>
          {
            lastUpdated && 
            <span>
              Last updated at { new Date(lastUpdated).toLocaleTimeString()}.
            </span>
          }
          {
            !isFetching && 
            <button onClick={this.handleRefreshClick}>
              Refresh
            </button>
          }
        </p>
        {
          isEmpty ?
            (isFetching ? <h2>Loading...</h2> : <h2>Empty.</h2>)
            : <div style={{opacity: isFetching ? 0.5 : 1}}>
                <Posts posts={posts} />
              </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
    console.log('state', state)
  const { selectedReddit, postsByReddit } = state
  const { 
    isFetching,
    lastUpdated,
    items: posts
  } = postsByReddit[selectedReddit] || {isFetching: true, items: []}
  console.log('post', posts)
  return {
    selectedReddit,
    posts,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(RedditApp)