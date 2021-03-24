<template>
  <div class="container">
    <div class="panel-body">
      <form>
        <div class="row text-center">
          <div class="form-group col-md-5">
            <label for="source">{{labelSource}}</label>
            <textarea
                class="form-control"
                v-model="source"
                id="source"
                name="source"
            ></textarea>
          </div>
          <div class="col-md-2 text-center">
            <img @click='changeLanguage()' alt="Поменять языки" :src="arrowLeftRightSVG" />
          </div>
          <div class="form-group col-md-5">
          <label for="target">{{labelTarget}}</label>
            <textarea
                class="form-control"
                v-model="target"
                id="target"
                name="target"
                readonly="readonly"
            ></textarea>
          </div>
        </div>
          <div class="col-md-12 text-center">
            <button
                @click='translate()'
                type="button"
                class="btn btn-info"
            >Перевести</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {Html5Entities} from 'html-entities';
import { getTranslation } from '@/services/Translation'

export default {
  name: 'Translation',
  data: function() {
    return {
      source: '',
      target: '',
      lang1: 'en',
      lang2: 'ru',
      labelSource: 'Английский',
      labelTarget: 'Русский',
      arrowLeftRightSVG: require('../assets/arrow-left-right.svg'),
    };
  },
  methods: {
    translate() {
      console.log(this.source)
      getTranslation(this.lang1,this.lang2,this.source).then(response => {
        console.log(Html5Entities.decode(response[0].translatedText));
        this.target = Html5Entities.decode(response[0].translatedText);
      })
    },
    changeLanguage(){
      this.lang1 = (this.lang1 === 'ru') ? 'en' : 'ru';
      this.lang2 = (this.lang2 === 'ru') ? 'en' : 'ru';
      this.labelSource = (this.labelSource === 'Английский') ? 'Русский' : 'Английский';
      this.labelTarget=  (this.labelTarget === 'Английский') ? 'Русский' : 'Английский';
    },
  }
}
</script>

<style scoped>
img{
  height: 25%;
  cursor: pointer;
}
</style>
