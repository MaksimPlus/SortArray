var array = [6, 2, 3, 1, 7, 4, 8, 5]
function DrawArray() {
    var wrapper = $(".blocks-wrapper");
    wrapper.html('');
    array.forEach(element => {
        wrapper.append(`<div class="block" id="block-${element}">${element}</div>`);
    });
    wrapper.addClass('reDrawed');

    setTimeout(() => {
        wrapper.removeClass('reDrawed');
    },1000)
}
function SortArray(A)
{
var n=A.length;
for (var i = 0; i< n-1; i++)
{
var min=i;
for (var j=i+1; j<n; j++)
{
if (A[j]<A[min]) min=j;
}
var t=A[min]; A[min]=A[i]; A[i]=t;
}
return A;
}