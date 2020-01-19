import { Link, useStaticQuery, graphql } from "gatsby"
import { Layout, Avatar, Badge, Button } from "antd"
import PropTypes from "prop-types"
import React from "react"

const { Header } = Layout

const HeaderCustom = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      reddit {
        accountsActive
      }
    }
  `)

  const { accountsActive } = data.reddit

  return (
    <Header>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link>{siteTitle}</Link>
        {/* <div>
          <Button icon="lock">Login</Button>
          <span style={{ marginLeft: 10 }}>
            <Badge count={accountsActive}>
              <Avatar shape="square" icon="user" />
            </Badge>
          </span>
        </div> */}
      </div>
    </Header>
  )
}

HeaderCustom.propTypes = {
  siteTitle: PropTypes.string,
}

HeaderCustom.defaultProps = {
  siteTitle: ``,
}

export default HeaderCustom
