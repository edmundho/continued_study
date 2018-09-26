// Some user interactions, such as resizing and scrolling, can create a huge number of browser events in a short period of time.If listeners attached to these events take a long time to execute, the user's browser can start to slow down significantly. To mitigate this issue, we want to implement a throttle function that will detect clusters of events and reduce the number of times we call an expensive function. 

// Your function will accept an array representing a stream of event timestamps and return an array representing the times that a callback should have been called.If an event happens within wait time of the previous event, it is part of the same cluster.Your function should satisfy the following use cases:

// 1) Firing once on the first event in a cluster, e.g.as soon as the window starts resizing. 
// 2) Firing once after the last event in a cluster, e.g.after the user window stops resizing. 
// 3) Firing every interval milliseconds during a cluster, e.g.every 100ms while the window is resizing.

function throttle(wait, onLast, onFirst, interval, timestamps) {
  let result = [];
  let ticker = timestamps[0];

  for (let i = 0; i < timestamps.length; i++) {
    let t = timestamps[i];
    let clusterStart = false;
    let clusterEnd = false;
    let inCluster = false;

    // check if we are at the start of a cluster
    // meaning the last timestamp was more than the wait time prior
    if (i === 0 || t > timestamps[i - 1] + wait) {
      clusterStart = true;
      inCluster = true;
    } else {
      clusterStart = false;
    }

    // check if we are inside of a cluster
    // meaning we are within the wait time of a cluster start
    if (t <= timestamps[i - 1] + wait) {
      inCluster = true;
    } 
    
    // check if we are at the end of a cluster, 
    // meaning the next timestamp starts a new cluster
    if (i === timestamps.length - 1 || timestamps[i + 1] > t + wait) {
      clusterEnd = true;
    } else {
      clusterEnd = false;
    }

    // if there is an interval, the first tick is at the start of a cluster + the interval
    if (interval > 0) {
      if (clusterStart) {
        ticker = t + interval;
        result.push(ticker);
    // subsequent ticks are dependent on whether we are within a cluster
      } else if (inCluster) {
        ticker += interval;
    // and if our ticker has reached beyond our final timestamp
    // we only push in if onLast is true
        if (ticker >= timestamps[timestamps.length - 1]) {
          if (onLast) {
            result.push(ticker);
          }
        } else {
          result.push(ticker);
        }
      }
    }

    // push in time if at the start of a cluster & onFirst is true
    if (clusterStart && onFirst) {
      result.push(t);
    }

    // push in time if at the end of a cluster & onLast is true
    if (clusterEnd && onLast) {
      result.push(t + wait);
    }
  }

  return result;
}

console.log(throttle(20, false, true, 0, [0, 10, 20, 30])); // [0] -
console.log(throttle(20, true, false, 0, [0, 10, 20, 30])); // [50] -
console.log(throttle(20, false, true, 20, [0, 10, 20, 30])); // )[0, 20] -
console.log(throttle(20, false, true, 0, [0, 10, 40])); // [0, 40] -
console.log(throttle(20, true, false, 0, [0, 10, 40])); // [30, 60] -
console.log(throttle(20, true, true, 0, [0, 10, 50])); // [0, 30, 50, 70] -
console.log(throttle(20, true, true, 10, [0, 10, 50])); // [0, 10, 20, 30, 50, 60, 70]	