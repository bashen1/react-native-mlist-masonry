import { ScrollView, View, } from 'react-native';
import React, { memo } from 'react';

const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }, onEndReachedThreshold) => {
    const paddingToBottom = contentSize.height * onEndReachedThreshold;
    return (layoutMeasurement.height + contentOffset.y >=
        contentSize.height - paddingToBottom);
};

const MasonryList = (props) => {
    const { keyPrefix, data, innerRef, ListHeaderComponent, ListEmptyComponent, ListFooterComponent, renderItem, onEndReachedThreshold, onEndReached, loading, LoadingView, numColumns = 2, style, horizontal, } = props;
    return (<ScrollView {...props} ref={innerRef} style={[{ flex: 1, alignSelf: 'stretch' }, style]} onScroll={(e) => {
                props.onScroll(e);
                const { nativeEvent } = e;
            if (isCloseToBottom(nativeEvent, onEndReachedThreshold || 0.1))
                onEndReached === null || onEndReached === void 0 ? void 0 : onEndReached();
        }}>
      {ListHeaderComponent ? (React.isValidElement(ListHeaderComponent) ? (ListHeaderComponent) : (<ListHeaderComponent />)) : null}
      {data.length === 0 && ListEmptyComponent ? (React.isValidElement(ListEmptyComponent) ? (ListEmptyComponent) : (<ListEmptyComponent />)) : (<View style={{ flex: 1, flexDirection: horizontal ? 'column' : 'row' }}>
          {Array.from(Array(numColumns), (_, num) => {
                return (<View key={`${keyPrefix}-${num.toString()}`} style={{
                        flex: 1 / numColumns,
                        flexDirection: horizontal ? 'row' : 'column',
                    }}>
                {data
                        .map((el, i) => {
                        if (i % numColumns === num)
                            return renderItem({ item: el, i });
                        return null;
                    })
                        .filter((e) => !!e)}
              </View>);
            })}
        </View>)}
      {loading && LoadingView}
      {ListFooterComponent ? (React.isValidElement(ListFooterComponent) ? (ListFooterComponent) : (<ListFooterComponent />)) : null}
    </ScrollView>);
}
export default memo(MasonryList);
