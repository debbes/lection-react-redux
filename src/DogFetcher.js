import React from "react";
import { connect } from "react-redux";
import { fetchDogAC, requestDogAC, requestDogSuccessAC, requestDogErrorAC } from "./redux/actions"

class DogFetcher extends React.Component {
  // Шаг 0
  // onClick = async () => {
  //   const resp = await fetch('https://dog.ceo/api/breeds/image/random');
  //   const data = await resp.json();
  //   this.props.onSuccess(data);
  // };

  // Шаг 1
  // onClick = async () => {
  //   try {
  //     this.props.onFetch();
  //     const resp = await fetch('https://dog.ceo/api/breeds/image/random');
  //     const data = await resp.json();
  //     this.props.onSuccess(data);
  //   } catch (err) {
  //     this.props.onError();
  //   }
  // };

  // Шаг 2
  onClick = () => {
    this.props.onClick();
  };

  render() {
    return (
      <div>
        <button onClick={this.onClick}>Показать собаку!</button>
        {this.props.loading
          ? <p>Загрузка...</p>
          : this.props.error
            ? <p>Ошибка, попробуйте ещё раз</p>
            : this.props.url && <p><img alt="the Dog" src={this.props.url} /></p>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
    url: state.url,
  }
};

// Шаг 0
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onSuccess: (data) => dispatch(requestDogSuccessAC(data)),
//   }
// };

// Шаг 1
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onFetch: () => dispatch(requestDogAC()),
//     onSuccess: (data) => dispatch(requestDogSuccessAC(data)),
//     onError: () => dispatch(requestDogErrorAC()),
//   }
// };

// Шаг 2
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onClick: () => fetchDogAC(dispatch),
//   }
// };

// Шаг 3
const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => dispatch(fetchDogAC()),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DogFetcher)
