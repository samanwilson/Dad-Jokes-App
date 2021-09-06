var Index = resolve => {
  require.ensure(['./Index.vue'], () => {
    resolve(require('./Index.vue'));
  });
};




export const Routes =[
  {
    path:'/',
    component : Index
  },

]
