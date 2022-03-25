import "./style.css";
import CategoryComponent from "../../components/category";
import FeedComponent from "../../components/feed";
import EmptyStateComponent from "../../components/empty";
//TODO:
// - Loop the data by using .map method (v)
// - Highlight the breaking news category (v)
// - Show Empty State if the data is empty (v)
// - Create simple isLoggedIn function and greet the user (same as slide) (v)

const NewsFeedPage = () => {
  const data = [
    {
      id: "123",
      category: "Breaking News",
      title: "Viral!! Pasukan ibu-ibu serbu minyak goreng di supermarket mini",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultricies id metus ut semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus id massa a consectetur. Cras congue id odio vitae mollis. Fusce arcu nibh, auctor quis tortor quis, fringilla sollicitudin mi. Donec tristique, enim ut ullamcorper gravida, tellus tortor laoreet neque, et pulvinar odio eros eget ex. Phasellus id eleifend neque.",
      image:
        "https://asset.kompas.com/crops/zNlQvdKK05yNr8-tEdDoza3IpCU=/0x0:0x0/750x500/data/photo/2022/02/18/620f71369f895.jpg",
      source: "kompas.com",
      date: "19-03-2022",
    },
    {
      id: "312",
      category: "Trending",
      title: "Heran?! Ongkang-ongkang kaki dapat RP121 Juta",
      description:
        "Duis lobortis odio purus, sed euismod nisl viverra nec. Nulla mattis congue lorem vitae egestas. Nulla quis maximus dui, ac ultricies ligula. Duis sed sagittis sapien, consectetur scelerisque metus. Praesent at suscipit nisi. Pellentesque iaculis porttitor neque, nec tempor nisi tincidunt sed. Mauris felis lectus, vulputate non aliquet sit amet, condimentum vel nisi.",
      image:
        "https://sgp1.digitaloceanspaces.com/radarbogor/2018/05/20180530_radar-bogor_halamanutama_112juta-ongkang-ongkang.jpg",
      source: "tvone.com",
      date: "19-02-2022",
    },
    {
      id: "423",
      category: "Top Rated",
      title: "Lagu ampun bang Jago mendadak viral di Tiktok",
      description:
        "Ut ac lectus porta, consectetur leo vitae, luctus elit. Praesent sem leo, fringilla non ultrices in, molestie in nisi. Nunc vitae tristique justo. Nullam gravida dolor eu dictum tempor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam nibh diam, aliquam condimentum sem at, tempus hendrerit orci. Integer elementum lorem et suscipit tempus. Integer feugiat turpis ligula, a commodo libero sollicitudin ac.",
      image:
        "https://yt3.ggpht.com/ytc/AKedOLRcwXL5heetbKNzpLCY3LOgml-72EcmpALhcvry5g=s900-c-k-c0x00ffffff-no-rj",
      source: "niknews.com",
      date: "19-01-2021",
    },
  ];

  if (data.length == 0) {
    return <EmptyStateComponent />;
  }
  //Todo: will be replace by API user data call
  const isLoggedIn = true;

  const title = isLoggedIn ? "Welcome Back Rudi!" : "Welcome Stranger!";

  return (
    <div className="container">
      <div className="feeds">
        <h1 className="feeds__title">{title} Today News!</h1>
        {data.map((feed, index) => (
          <CategoryComponent
            key={feed.id}
            category={feed.category}
            isHighlighted={feed.category === "Breaking News"}
          >
            <FeedComponent title="Hello WOrld" {...feed} />
          </CategoryComponent>
        ))}
      </div>
    </div>
  );
};

export default NewsFeedPage;
