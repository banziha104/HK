import React from 'react';
import {Item, Button, Container, Icon, Image, Label} from 'semantic-ui-react'
import new1 from '../image/new1.jpg';
import new2 from '../image/new2.jpg';
import new3 from '../image/new3.jpg';
import ContentsDivider from './ContentsDivider';
const HistoryContents = (props) => {
  return (
    <div style={{marginTop : '5em',paddingBottom:'10.0em'}}>
      <ContentsDivider title="News" subtitle="Information for visitor"/>
      <Container>
        <Item.Group divided>
          <Item>
            <Item.Image src={new1} />
            <Item.Content>
              <Item.Header as='a'>71년만에 가장 빨리 얼은 한강</Item.Header>
              <Item.Meta>
                <span>2017년 12월 15일 13시 44분 KST</span>
                <span>,허핑턴포스트코리아</span>
              </Item.Meta>
              <Item.Description>
                기상청은 15일, 한강대교에 위치한 관측지점이 결빙되었다고 공식 발표했다.
                한강이 이렇게 빨리 얼게 된 것은 최근 한파의 영향인 것으로 보인다. 서울 기온은 지난 11일부터 영하 10도 이하로 떨어지는 등 추위가 계속되었다.
              </Item.Description>
              <Item.Extra>
                <Icon name="comment"/>
                127 comments
                <Button as='div' labelPosition='left' floated='right'>
                  <Label as='a' basic pointing='right'>2,048</Label>
                  <Button icon>
                    <Icon name='heart' />
                    Like
                  </Button>
                </Button>
              </Item.Extra>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image src={new2} />
            <Item.Content>
              <Item.Header as='a'>겨울 한강을 즐기는 방법…뚝섬한강공원 눈썰매장 개장</Item.Header>
              <Item.Meta>
                <span>2017년 12월 12일 19시 41분 KST</span>
                <span>,경향신문</span>
              </Item.Meta>
              <Item.Description>
                어른아이 할 것 없이 누구나 부담 없이 즐길 수 있는 겨울 놀거리 ‘눈썰매’ 시즌이 돌아왔다. 특별한 기술이나 교육을 받지 않아도 썰매에 몸을 싣고 눈 덮인 슬로프를 신나게 미끄러져 내려오면 한겨울에도 이마에 땀이 송송 맺히는 짜릿한 즐거움을 만끽할 수 있다.
              </Item.Description>
              <Item.Extra>
                <Icon name="comment"/>
                302 comments
                <Button as='div' labelPosition='left' floated='right'>
                  <Label as='a' basic pointing='right'>5,203</Label>
                  <Button icon>
                    <Icon name='heart' />
                    Like
                  </Button>
                </Button>
              </Item.Extra>
            </Item.Content>
          </Item>
          <Item>
            <Item.Image src={new3} />
            <Item.Content>
              <Item.Header as='a'>서울서 만나는 유럽 감성…여의도 한강공원서 '크리스마스 마켓'</Item.Header>
              <Item.Meta>
                <span>2017년 12월 14일 14시 40분 KST</span>
                <span>,연합뉴스</span>
              </Item.Meta>
              <Item.Description>
                서울시는 오는 15일부터 31일까지 여의도 한강공원 이벤트광장에서 '서울 크리스마스 마켓'을 연다고 14일 밝혔다.

                시는 "겨울철 수요를 찾기 어려운 소상공인에게는 판로개척의 기회를 주고, 신규 창업자에게는 소비자의 반응을 살필 기회를 제공할 것"이라고 전했다.
              </Item.Description>
              <Item.Extra>
                <Icon name="comment"/>
                162 comments
                <Button as='div' labelPosition='left' floated='right'>
                  <Label as='a' basic pointing='right'>3,250</Label>
                  <Button icon>
                    <Icon name='heart' />
                    Like
                  </Button>
                </Button>
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Container>
    </div>
  );
};

export default HistoryContents;
