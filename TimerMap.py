
class TimerMap():

  def __init__(self):
    self.map = dict()

  def set(self, key, val, time):
    if key not in self.map:
      self.map[key] = {}
    self.map[key][time] = val

  def get(self, key, time):
    if key not in self.map:
      return None

    times = self.map.get(key)
    floor = float('-inf')
    value = None

    for cur_time,val in times.items():
      if cur_time <= time:
        value = val
        if cur_time > floor:
          floor = cur_time
          value = val

    return value

d = TimerMap()
d.set(1, 1, 0) # set key 1 to value 1 at time 0
d.set(1, 2, 2) # set key 1 to value 2 at time 2
print(d.get(1, 1)) # get key 1 at time 1 should be 1
print(d.get(1, 3)) # get key 1 at time 3 should be 2
c = TimerMap()
c.set(1, 1, 5) # set key 1 to value 1 at time 5
print(c.get(1, 0)) # get key 1 at time 0 should be null
print(c.get(1, 10)) # get key 1 at time 10 should be 1
e = TimerMap()
e.set(1, 1, 0) # set key 1 to value 1 at time 0
e.set(1, 2, 0) # set key 1 to value 2 at time 0
print(e.get(1, 0)) # get key 1 at time 0 should be 2