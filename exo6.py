class Intervalle:
  def __init__(self, a, b):
    self.a=a
    self.b=b
    if a<=b:
      self.ens=set(k for k in range(self.a, self.b+1, 1))
    else: self.ens=0
  def est_vide(self):
    if self.ens==0:
      return True
    return False
  def __len__(self):
    if self.b<self.a:
      return 0
    else: return len(self.ens)
  def __contains__(self, x):
    return x in self.ens
  def intersection(self, x):
    inter=[]
    if x.a<x.b:
      if x.a in self.ens or x.b in self.ens:
        if x.a>self.a: inter.append(x.a)
        else: inter.append(self.a)
        if x.b<self.b: inter.append(x.b)
        else: inter.append(self.b)
        return inter
    elif x.a==x.b and x.a in self.ens:
      return x.a
    else: return None
  def union(self, x):
    uni=[]
    if x.a<x.b:
      if x.a in self.ens or x.b in self.ens:
        if x.a<self.a: uni.append(x.a)
        else: uni.append(self.a)
        if x.b>self.b: uni.append(x.b)
        else: uni.append(self.b)
        return uni
      elif x.a<self.a:return [x.a, x.b, '/', self.a, self.b]
      else:return [self.a, self.b, '/', x.a, x.b]
    elif x.a==x.b and x.a in self.ens:return x.a
    else: return 0

