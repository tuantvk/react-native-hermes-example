import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Card,
} from 'native-base';
import { Lists } from './Lists';


const CardBooking = item => {
  const { type, name_from, name_to } = item;
  return (
    <Card style={styles.card}>
      <Icon
        style={styles.card_icon}
        type="MaterialIcons"
        name={type === 1 ? "train" : "airplanemode-active"}
      />
      <View style={styles.card_container}>
        <View style={styles.card_content}>
          <Text>{name_from}</Text>
          <Icon
            style={styles.arrow_right}
            type="Entypo"
            name="arrow-right"
          />
          <Text>{name_to}</Text>
        </View>
        <Text style={styles.time}>28 Oct, 2019 - 11:00AM</Text>
        <Text style={styles.time}>Emirates Airways</Text>
      </View>
    </Card>
  )
}

export default class Booking extends Component {

  _keyExtractor = (item, index) => item.id.toString();

  _renderItem = ({ item }) => (
    <CardBooking
      {...item}
    />
  )

  _back = () => this.props.navigation.goBack();

  render() {
    return (
      <Container style={styles.container}>
        <Header
          style={styles.header}
          androidStatusBarColor="#000"
        >
          <Left>
            <Button transparent onPress={this._back}>
              <Icon style={styles.icon} name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Text style={styles.title}>Booking</Text>
          </Body>
          <Right>
            <Button transparent>
              <Icon style={styles.icon} name='search' />
            </Button>
            <Button transparent>
              <Icon style={styles.icon} name='heart' />
            </Button>
          </Right>
        </Header>
        <ScrollView>
          <View style={styles.list_card}>
            <FlatList
              data={Lists}
              keyExtractor={this._keyExtractor}
              renderItem={this._renderItem}
            />
          </View>
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f6'
  },
  header: {
    backgroundColor: '#fff',
    elevation: 1,
    borderBottomWidth: 0
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    color: '#252525'
  },
  icon: {
    color: '#414141'
  },
  list_card: {
    paddingVertical: 25,
    paddingHorizontal: 30
  },
  card: {
    borderRadius: 18,
    marginBottom: 5,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  card_icon: {
    backgroundColor: '#ffeded',
    color: '#f36886',
    padding: 15,
    borderRadius: 30
  },
  card_container: {
    marginLeft: 20,
  },
  card_content: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 5
  },
  arrow_right: {
    fontSize: 12,
    marginHorizontal: 2
  },
  time: {
    color: '#525252',
    fontSize: 11
  }
})