import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Divider from "react-native-divider";

const postFooterIcons = [
  {
    name: "Like",
    imageUrl: "http://www.swanslake.in/images/open.png",
    likedImageUrl: "http://www.swanslake.in/images/filled.png",
  },
  {
    name: "Comment",
    imageUrl: "http://www.swanslake.in/images/comment.png",
  },
  {
    name: "Share",
    imageUrl: "http://www.swanslake.in/images/share1.png",
    // "https://cdn140.picsart.com/288962381001211.png?to=crop&type=webp&r=768x669&q=85",
  },
  {
    name: "Save",
    imageUrl: "http://www.swanslake.in/images/save2.png",
  },
];

function Post({ post }) {
  return (
    <View style={{ marginBottom: 10 }}>
      {/*<View
        style={{
          borderBottomColor: "grey",
          borderBottomWidth: 1,
          opacity: 0.2,
          marginTop: 5,
        }}
      />*/}
      <View style={{ marginTop: 8 }}>
        <PostHeader post={post} />
      </View>
      <PostImage post={post} />
      <View style={{ marginHorizontal: 15, marginTop: 10 }}>
        <PostFooter />
        <Likes post={post} />
        <Caption post={post} />
        <CommentsSection post={post} />
        <Comments post={post} />
      </View>
    </View>
  );
}

function PostHeader({ post }) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        margin: 5,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image source={{ uri: post.profile_picture }} style={styles.story} />
        <Text style={{ marginLeft: 5, fontWeight: "700" }}>{post.user}</Text>
      </View>
      <View>
        <Text style={{ fontWeight: "900" }}>...</Text>
      </View>
    </View>
  );
}
function PostImage({ post }) {
  return (
    <View style={{ width: "100%", height: 450 }}>
      <Image
        source={{ uri: post.imageUrl }}
        style={{ height: "100%", resizeMode: "cover" }}
      />
    </View>
  );
}
function PostFooter({handlelike, post}) {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={styles.leftFooterIconsContainer}>
        <Icon
          imgStyle={styles.footerIcon1}
          imgUrl={postFooterIcons[0].imageUrl}
        />

        <Icon
          imgStyle={styles.footerIcon2}
          imgUrl={postFooterIcons[1].imageUrl}
        />

        <Icon
          imgStyle={[styles.iconSize, styles.shareIcon]}
          imgUrl={postFooterIcons[2].imageUrl}
        />
      </View>
      <View style={{ flex: 1, alignItems: "flex-end" }}>
        <Icon
          imgStyle={styles.footerIcon2}
          imgUrl={postFooterIcons[3].imageUrl}
        />
      </View>
    </View>
  );
}

const Icon = ({ imgStyle, imgUrl }) => (
  <TouchableOpacity>
    <Image style={imgStyle} source={{ uri: imgUrl }} />
  </TouchableOpacity>
);

const Likes = ({ post }) => (
  <View style={{ flexDirection: "row", marginTop: 4 }}>
    <Text style={{ fontWeight: "700" }}>
      {post.likes_by_users.lenght.toLocaleString("en")} likes
    </Text>
  </View>
);

const Caption = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    <Text>
      <Text style={{ fontWeight: "600", fontSize: 15 }}>{post.user}</Text>
      <Text> {post.caption}</Text>
    </Text>
  </View>
);

const CommentsSection = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    {!!post.comments.length && (
      <Text style={{ color: "grey" }}>
        View{post.comments.length > 1 ? " all " : ""}
        {post.comments.length}
        {post.comments.length > 1 ? " comments" : "comment"}
      </Text>
    )}
  </View>
);

const Comments = ({ post }) => (
  <>
    {post.comments.map((comment, index) => (
      <View key={index} style={{ flexDirection: "row", marginTop: 5 }}>
        <Text>
          <Text style={{ fontWeight: "600" }}>{comment.user}</Text>{" "}
          {comment.comment}
        </Text>
      </View>
    ))}
  </>
);

const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 2,
    borderColor: "#ff8505",
  },
  footerIcon1: {
    width: 36,
    height: 36,
  },
  footerIcon2: {
    width: 33,
    height: 33,
  },

  leftFooterIconsContainer: {
    flexDirection: "row",
    width: "32%",
    justifyContent: "space-between",
  },
  iconSize: {
    width: 25,
    height: 24,
    marginTop: 5,
  },
  shareIcon: {
    transform: [{ rotate: "20deg" }],
    marginTop: 3,
  },
});
export default Post;
