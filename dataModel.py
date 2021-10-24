import pandas as pd
import nltk
from nltk import word_tokenize
from nltk.corpus import stopwords  #stopwords
from nltk.stem import WordNetLemmatizer
from sklearn.feature_extraction.text import TfidfVectorizer
stop_words=set(nltk.corpus.stopwords.words('english'))

rev = pd.read_csv(r"jesus.csv")
rev.head()


def clean_text(headline):
    le = WordNetLemmatizer()
    word_tokens = word_tokenize(headline)
    tokens = [le.lemmatize(w) for w in word_tokens if w not in stop_words and len(w) > 3]
    cleaned_text = " ".join(tokens)
    return cleaned_text
rev['cleaned_text'] = rev['Text'].apply(clean_text)

vect =TfidfVectorizer(stop_words=stop_words,max_features=1000)
vect_text=vect.fit_transform(rev['cleaned_text'])

from sklearn.decomposition import LatentDirichletAllocation
lda_model=LatentDirichletAllocation(n_components=10,
learning_method='online',random_state=42,max_iter=1)
lda_top=lda_model.fit_transform(vect_text)

print("Document 0: ")
for i,topic in enumerate(lda_top[0]):
  print("Topic ",i,": ",topic*100,"%")

vocab = vect.get_feature_names()
for i, comp in enumerate(lda_model.components_):
     vocab_comp = zip(vocab, comp)
     sorted_words = sorted(vocab_comp, key= lambda x:x[1], reverse=True)[:10]
     print("Topic "+str(i)+": ")
     for t in sorted_words:
            print(t[0],end=" ")
            print("n")
