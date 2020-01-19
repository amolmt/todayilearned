import React from "react"
import {
  Card,
  Col,
  Row,
  Divider,
  Badge,
  Icon,
  Avatar,
  Typography,
  Popover,
} from "antd"
import { useStaticQuery, graphql } from "gatsby"

const { Paragraph } = Typography
const { Meta } = Card

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
)

const ShowerThought = () => {
  const data = useStaticQuery(graphql`
    query {
      reddit {
        title
        hotListings {
          score
          title
          url
          author {
            username
          }
        }
      }
    }
  `)

  const { hotListings } = data.reddit

  return (
    <Row gutter={32}>
      {hotListings.map(listing => (
        <Col xs={24} sm={24} md={6} lg={6} xl={6}>
          <Card
            size={"default"}
            // title={listing.author.username}
            bordered={false}
            actions={[
              <a href={listing.url} target="_blank" rel="noopener noreferrer">
                <Icon type="link" key="edit" />
              </a>,
              <Popover content={listing.score} title="Upvotes">
                <Icon type="ellipsis" key="ellipsis" />
              </Popover>,
              <Badge
                count={listing.score}
                overflowCount={99999}
                style={{ backgroundColor: "#52c41a" }}
              />,
            ]}
          >
            <Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title={listing.author.username}
            />

            <Paragraph
              type="ellipsis"
              ellipsis={{
                rows: 1,
                expandable: true,
              }}
            >
              {listing.title}
            </Paragraph>
          </Card>
          <Divider />
        </Col>
      ))}
    </Row>
  )
}

const Categories = () => (
  <div style={{ background: "#ECECEC", padding: "30px" }}>
    <Row gutter={16}>
      <ShowerThought />
      <Divider />
    </Row>
  </div>
)

export default Categories
