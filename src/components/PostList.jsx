import { Tag, Wrap, WrapItem } from "@chakra-ui/react";
import { useAtom } from "jotai";
import React from "react";
import gun from "../libs/gun";
import { threadIdAtom } from "../libs/jotaiAtoms";


const PostList = () => {
  const [allPosts, setAllPosts] = React.useState([]);
  const [thread] = useAtom(threadIdAtom);
  const [{ oldPath }, setOldParam] = React.useState({ oldPath: '', oldThread: '' })

  const path = React.useMemo(
    () => thread
      ? `t/${thread}`
      : gun?.user()?.is
        ? `u/${gun?.user()?.is?.alias}`
        : 'data'
    , [thread, gun?.user()?.is]
  );

  React.useEffect(() => {
    // show empty for fresh new thread
    if (path !== oldPath) {
      setAllPosts([]);
    }
    setOldParam(d => ({ ...d, oldPath: path }));
    
    gun.get(path).on((d) => setAllPosts(parseD(d)));
  }, [gun.user(), thread, path]);


  const parseD = (d) => {
    return d && Object.entries(d)
      .map(([k, v], i) => {
        if (k === "_") return;
        return {
          datetime: k,
          text: v,
        };
      })
      .filter(Boolean)
      .reverse();
  };

  return (
    <Wrap>
      {allPosts && allPosts.length ? allPosts.map(({ datetime, text }, i) => (
        <WrapItem key={datetime + text}>
          <Tag variant={"outline"}>{text}</Tag>
        </WrapItem>
      )) : null}
    </Wrap>
  );
};

export default PostList;
