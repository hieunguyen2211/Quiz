import React, { Component } from 'react';
import { Table, Card } from 'antd';
import { connect } from 'react-redux';
import moment from 'moment';
import { Link } from 'react-router-dom';
import Wrapper from './styles';
import * as StatisticAction from '../../../../redux/statistic/actions';

class RoomTable extends Component {
  constructor(props) {
    super(props);
    const { rooms } = this.props;
    this.columns = [
      {
        title: 'Code',
        dataIndex: 'code',
        key: 'code',
        render: (text, row) => {
          return <Link to={`/admin/rooms/${row.id}`}>{text}</Link>;
        },
      },
      {
        title: 'Quiz',
        dataIndex: 'testName',
        key: 'testName',
      },
      {
        title: 'Host',
        dataIndex: 'creatorName',
        key: 'creatorName',
      },
      {
        title: 'Total Participant',
        dataIndex: 'totalParticipant',
        key: 'totalParticipant',
        width: '25%',
      },
      {
        title: 'Created At',
        dataIndex: 'createdAt',
        key: 'createdAt',
        render: (time) => {
          return moment(time).format('L');
        },
      },
    ];
    if (rooms.length === 0) {
      this.props.retrieveStatisticRoom();
    }
  }

  render() {
    const { rooms } = this.props;

    return (
      <Wrapper>
        <Card>
          <Table
            columns={this.columns}
            dataSource={rooms} 
            pagination={{defaultPageSize: 7}}
            />
        </Card>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  const { statistic } = state;
  const { rooms } = statistic;
  return {
    rooms,
  };
};

const mapDispatchToProps = (dispatch) => ({
  retrieveStatisticRoom: () => {
    dispatch(StatisticAction.getRoomStatisticAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RoomTable);
