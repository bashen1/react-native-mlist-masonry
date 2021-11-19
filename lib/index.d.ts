import { RefreshControlProps, ScrollView, ScrollViewProps, StyleProp, ViewStyle } from 'react-native';
import React, { MutableRefObject, ReactElement } from 'react';
interface Props<T> extends Omit<ScrollViewProps, 'refreshControl' | 'onScroll'> {
    innerRef?: MutableRefObject<ScrollView | undefined>;
    keyPrefix?: string;
    loading?: boolean;
    refreshing?: RefreshControlProps['refreshing'];
    onRefresh?: RefreshControlProps['onRefresh'];
    onEndReached?: () => void;
    onEndReachedThreshold?: number;
    style?: StyleProp<ViewStyle>;
    data: T[];
    renderItem: ({ item: T, i: number }: {
        item: any;
        i: any;
    }) => ReactElement;
    LoadingView?: React.ComponentType<any> | React.ReactElement | null;
    ListHeaderComponent?: React.ComponentType<any> | React.ReactElement | null;
    ListEmptyComponent?: React.ComponentType<any> | React.ReactElement | null;
    ListFooterComponent?: React.ComponentType<any> | React.ReactElement | null;
    numColumns?: number;
}
declare function MasonryList<T>(props: Props<T>): ReactElement;
declare const _default: React.MemoExoticComponent<typeof MasonryList>;
export default _default;
