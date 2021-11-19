# react-native-mlist-masonry

[![npm version](https://badge.fury.io/js/react-native-mlist-masonry.svg)](https://badge.fury.io/js/react-native-mlist-masonry)

此项目基于(react-native-masonry-list)[https://github.com/hyochan/react-native-masonry-list]，版本1.1.1

## 开始

```
yarn add react-native-mlist-masonry
```

```tsx
import MasonryList from 'react-native-mlist-masonry';
```

## 预览

| 2列 | 3列 | 4列 |
|------------|:-----------:|:-----------:|
|<img src="https://user-images.githubusercontent.com/27461460/116809803-f170e680-ab7a-11eb-8f16-e28a3ab0c741.gif" width=200/>|<img src="https://user-images.githubusercontent.com/27461460/116815966-08bfcc00-ab9b-11eb-9b9f-5928484217d9.gif" width=200/>|<img src="https://user-images.githubusercontent.com/27461460/116815949-f6459280-ab9a-11eb-8434-85f3cc834202.gif" width=200/>|

## Props

```tsx
innerRef?: MutableRefObject<ScrollView | undefined>;
keyPrefix?: string;
loading?: boolean;
refreshing?: RefreshControlProps['refreshing'];
onRefresh?: RefreshControlProps['onRefresh'];
onEndReached?: () => void;
onEndReachedThreshold?: number;
style?: StyleProp<ScrollViewProps>;
data: T[];
renderItem: ({item: T, i: number}) => ReactElement;
LoadingView?: React.ComponentType<any> | React.ReactElement | null;
ListHeaderComponent?: React.ComponentType<any> | React.ReactElement | null;
ListEmptyComponent?: React.ComponentType<any> | React.ReactElement | null;
ListFooterComponent?: React.ComponentType<any> | React.ReactElement | null;
numColumns?: number;
```

**`innerRef`** -            Expose ScrollView instance with `ref`, example usage:  `ref.current.scrollTo`.

**`keyPrefix`** -             Add prefix for keying child views. This is currently incremented by `1`.

**`loading`** -             Currently in loading status.

**`refreshing`** -          Currently in refreshing status.

**`onRefresh`** -           Callback when `refresh` has been triggered.

**`onEndReached`** -        Callback when end is reached just like the [onEndReached in FlatList](https://reactnative.dev/docs/flatlist#onendreached)

**`style`** -               Style props for [ScrollView](https://reactnative.dev/docs/next/scrollview) which is the container view.

**`data`** -                The array of the `data` for the view to render in `renderItem`

**`renderItem`** -          Render custom view with the `data` passed down.

**`LoadingView`** -         Custom loading view when the view is in `loading` status.

**`ListHeaderComponent`** - Header component

**`ListFooterComponent`** - Footer component

**`ListEmptyComponent`** -  Component to render when the `data` is empty.

**`numColumns`** -          Number of columns you want to render. `Default to 2`.


## Usage

```tsx
<MasonryList
  data={filteredItems}
  keyExtractor={(item, index): string => index.toString()}
  numColumns={2}
  renderItem={({item}) => <CardItem />}
  onRefresh={() => refetch({first: ITEM_CNT})}
  onEndReachedThreshold={0.1}
  onEndReached={() => loadNext(ITEM_CNT)}
/>
```

