class Fraction:
  def __init__(self, num, denom):
    if denom<0:
      raise ValueError
    self.num=num
    self.denom=denom
  def __str__(self):
    if self.denom==1:
      return str(int(self.num))
    return str(self.num)+"/"+str(self.denom)
  def __eq__(self, x):
    if self.num/self.denom==x.num/x.denom:
      return True
    return False
  def __it__(self, x):
    if self.num/self.denom<x.num/x.denom:
      return True
    return False
  def __add__(self, x):
    n1=x.num*self.denom
    n2=self.num*x.denom
    denomFinal=x.denom*self.denom
    nomFinal=n1+n2
    return str(int(nomFinal))+"/"+str(int(denomFinal))
  def __mul__(self, x):
    nomFinal=x.num*self.num
    denomFinal=x.denom*self.denom
    return str(int(nomFinal))+"/"+str(int(denomFinal))
  def simplify(self):
    div1=getFactors(self.num)
    div2=getFactors(self.denom)
    d=divis(div1, div2)
    print(self.__str__())
    while d!=0:
      self.num = int(self.num/d)
      self.denom = int(self.denom/d)
      div1=getFactors(self.num)
      div2=getFactors(self.denom)
      d=divis(div1, div2)
    
def getFactors(n):
    factors=[];
    for i in range(n, 1, -1):
      if n % i == 0:
          factors.append(i)
    return factors

def divis(div1, div2):
  for i in range(len(div1)):
      for u in range(len(div2)):
        if div1[i]== div2[u]:
          return div1[i]
  return 0

def affichage(X):
  print(" "+str(X.num))
  print("---")
  print(" "+str(X.denom))
