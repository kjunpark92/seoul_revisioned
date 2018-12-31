import React from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import Story from "../../presentational/Story/Story";
import StoryStyle from "../../../styles/components/containers/StoryStyle/StoryStyle";
import MenuNavi from "../../presentational/MenuNavi";

class StoriesContainer extends React.Component {
  state = {
    isLoaded: false,
    stories: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/stories")
      .then(res => {
        console.log(res);
        this.setState({ isLoaded: true, stories: res.data.stories });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    const stories = this.state.stories.map((story, index) => {
      return <Story story={story} />;
    });

    console.log(stories);
    return this.state.isLoaded == true ? (
      <React.Fragment>
        <StoryStyle>
          <MenuNavi menuName="Stories" />
          <Switch>
            <Route
              exact
              path="/stories"
              render={() => {
                return stories;
              }}
            />
            <Route path="/stories/:id" />
          </Switch>
        </StoryStyle>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <StoryStyle>
          <MenuNavi menuName="Stories" />
          <div>Loading</div>
        </StoryStyle>
      </React.Fragment>
    );
  }
}

export default StoriesContainer;
