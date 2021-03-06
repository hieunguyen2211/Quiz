import React, { Component } from 'react';
import { Card, Table } from 'antd';
import { PulseLoader } from 'react-spinners';
import { connect } from 'react-redux';
import theme from '../../../configs/theme';
import Wrapper from './styles';
import * as StatisticAction from '../../../redux/statistic/actions';

class UserRanking extends Component {
  constructor(props) {
    super(props);
    const { id } = this.props.match.params;
    this.props.retrieveRoomStatisticDetail(id);
    this.columns = [
      {
        dataIndex: 'fullName',
        key: 'fullName',
        render: (text, record) => {
          if (record.position === 1) {
            return (
              <span className="rank-1">
                {` ${text} `}
                <div className="trophy-icon">
                  <img
                    src="https://img.icons8.com/color/48/000000/gold-medal--v1.png"
                    alt=""
                  />
                </div>
              </span>
            );
          }
          if (record.position === 2) {
            return (
              <span className="rank-2">
                {` ${text} `}
                <div className="trophy-icon">
                  <img
                    src="https://img.icons8.com/color/48/000000/olympic-medal-silver.png"
                    alt=""
                  />
                </div>
              </span>
            );
          }
          if (record.position === 3) {
            return (
              <span className="rank-3">
                {` ${text} `}
                <div className="trophy-icon">
                  <img
                    src="https://img.icons8.com/color/48/000000/olympic-medal-bronze.png"
                    alt=""
                  />
                </div>
              </span>
            );
          }
          return text;
        },
      },
      {
        title: 'SCORE',
        dataIndex: 'score',
        key: 'score',
        sorter: (a, b) => a.score - b.score,
        sortDirections: ['descend', 'ascend'],
      },
      {
        title: 'TIME',
        dataIndex: 'time',
        width: '20%',
        key: 'time',
        render: (text) => `${text} s`,
        sorter: (a, b) => a.time - b.time,
        sortDirections: ['descend', 'ascend'],
      },
    ];
  }

  render() {
    const { roomDetail, loading } = this.props;
    return loading ? (
      <Wrapper>
        <div className="loading-container">
          <PulseLoader
            loading={loading}
            size={30}
            color={theme.palette.primary}
          />
        </div>
      </Wrapper>
    ) : (
      <Wrapper>
        <Card title={` User ranking (${roomDetail?.totalParticipant} members)`}>
          <Table columns={this.columns} dataSource={roomDetail?.userRanking} />
        </Card>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  const { statistic } = state;
  const { roomDetail, loading } = statistic;
  return {
    roomDetail,
    loading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  retrieveRoomStatisticDetail: (id) => {
    dispatch(StatisticAction.getRoomStatisticDetailAction(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserRanking);
