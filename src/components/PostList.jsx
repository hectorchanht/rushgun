import { Tag, Wrap, WrapItem } from "@chakra-ui/react";
import { useAtom } from "jotai";
import React from "react";
import gun from "../libs/gun";
import { aliasAtom, threadIdAtom } from "../libs/jotaiAtoms";
import { useRouter } from 'next/router';


const PostList = () => {
  const [allPosts, setAllPosts] = React.useState([]);
  const [thread] = useAtom(threadIdAtom);
  const [alias] = useAtom(aliasAtom);
  const router = useRouter();

  const path = React.useMemo(
    () => thread
      ? `t/${thread}`
      : alias
        ? `u/${alias}`
        : 'd/public'
    , [thread, alias]
  );

  React.useEffect(() => {
    setAllPosts([]);  // keep this line to make 'password' functioning
    if (alias) {
      gun.user().get(path).on(d => {setAllPosts(parseD(d))});
    } else {
      gun.get(path).on((d) => {setAllPosts(parseD(d))});
    }
  }, [path]);

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
