import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Book from './Book'

const Books = () => (
  <Query
    query={gql`
      {
        photographs {
          id
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Good things take time....</p>
      if (error) return <p>Something went wrong...</p>

      return <div className="row">{data.photographs.map(book => <Book book={book} />)}</div>
    }}
  </Query>
)

export default Books