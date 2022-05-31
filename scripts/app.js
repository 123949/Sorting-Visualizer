"use strict";
const start = async () => {
  let algoValue = Number(document.querySelector(".algo-menu").value);
  let speedValue = Number(document.querySelector(".speed-menu").value);

  if (speedValue === 0) {
    speedValue = 1;
  }
  if (algoValue === 0) {
    alert("No Algorithm Selected");
    return;
  }

  let algorithm = new sortAlgorithms(speedValue);
  if (algoValue === 1) await algorithm.BubbleSort();
  if (algoValue === 2) await algorithm.SelectionSort();
  if (algoValue === 3) await algorithm.InsertionSort();
  if (algoValue === 4) await algorithm.MergeSort();
  if (algoValue === 5) await algorithm.QuickSort();
};

const RenderScreen = async () => {
  let algoValue = Number(document.querySelector(".algo-menu").value);
  await RenderList();
};

const RenderList = async () => {
  let sizeValue = Number(document.querySelector(".size-menu").value);
  await clearScreen();

  let list = await randomList(sizeValue);
  const arrayNode = document.querySelector(".array");
  console.log(arrayNode);
  console.log(list);
  for (const element of list) {
    const node = document.createElement("div");
    node.className = "cell";
    node.setAttribute("value", String(element));
    node.innerText = element;
    node.style.height = `${3.8 * element}px`;
    arrayNode.appendChild(node);
  }
};

const RenderArray = async (sorted) => {
  let sizeValue = Number(document.querySelector(".size-menu").value);
  await clearScreen();

  let list = await randomList(sizeValue);
  if (sorted) list.sort((a, b) => a - b);

  const arrayNode = document.querySelector(".array");
  const divnode = document.createElement("div");
  divnode.className = "s-array";

  for (const element of list) {
    const dnode = document.createElement("div");
    dnode.className = "s-cell";
    dnode.innerText = element;
    divnode.appendChild(dnode);
  }
  arrayNode.appendChild(divnode);
};

const randomList = async (Length) => {
  let list = new Array();
  let choice = confirm("Enter custom values?");
  if (choice === true) {
    let vs = prompt(`Enter ${Length} values (comma seperated)`);
    vs = vs.split(',');
    for (let counter = 0; counter < Length; ++counter) {
      list.push(parseInt(vs[counter]))
    }
  } else {
    
    let lowerBound = 1;
    let upperBound = 100;

    for (let counter = 0; counter < Length; ++counter) {
      let randomNumber = Math.floor(
        Math.random() * (upperBound - lowerBound + 1) + lowerBound
      );
      list.push(parseInt(randomNumber));
    }
  }

  
  return list;
};

const clearScreen = async () => {
  document.querySelector(".array").innerHTML = "";
};

const response = () => {
  let Navbar = document.querySelector(".navbar");
  if (Navbar.className === "navbar") {
    Navbar.className += " responsive";
  } else {
    Navbar.className = "navbar";
  }
};



document.querySelector('#menu').onchange = ()=> {
  let value = document.querySelector('#menu').value;
  if (value == '1') {
    document.querySelector('code.language-c').innerText = `

// C program for implementation of Bubble sort
#include <stdio.h>

void swap(int* xp, int* yp)
{
  int temp = *xp;
  *xp = *yp;
  *yp = temp;
}

// A function to implement bubble sort
void bubbleSort(int arr[], int n)
{
  int i, j;
  for (i = 0; i < n - 1; i++)

    // Last i elements are already in place
    for (j = 0; j < n - i - 1; j++)
      if (arr[j] > arr[j + 1])
        swap(&arr[j], &arr[j + 1]);
}

/* Function to print an array */
void printArray(int arr[], int size)
{
  int i;
  for (i = 0; i < size; i++)
    printf("%d ", arr[i]);
  printf("\n");
}

// Driver program to test above functions
int main()
{
  int arr[] = { 64, 34, 25, 12, 22, 11, 90 };
  int n = sizeof(arr) / sizeof(arr[0]);
  bubbleSort(arr, n);
  printf("Sorted array: \n");
  printArray(arr, n);
  return 0;
}



    `
  }
  if (value === '2') {
    document.querySelector('code.language-c').innerText =`

    // C program for implementation of selection sort
#include <stdio.h>

void swap(int *xp, int *yp)
{
  int temp = *xp;
  *xp = *yp;
  *yp = temp;
}

void selectionSort(int arr[], int n)
{
  int i, j, min_idx;

  // One by one move boundary of unsorted subarray
  for (i = 0; i < n-1; i++)
  {
    // Find the minimum element in unsorted array
    min_idx = i;
    for (j = i+1; j < n; j++)
    if (arr[j] < arr[min_idx])
      min_idx = j;

    // Swap the found minimum element with the first element
    swap(&arr[min_idx], &arr[i]);
  }
}

/* Function to print an array */
void printArray(int arr[], int size)
{
  int i;
  for (i=0; i < size; i++)
    printf("%d ", arr[i]);
  printf("\n");
}

// Driver program to test above functions
int main()
{
  int arr[] = {64, 25, 12, 22, 11};
  int n = sizeof(arr)/sizeof(arr[0]);
  selectionSort(arr, n);
  printf("Sorted array: \n");
  printArray(arr, n);
  return 0;
}
`
  }
  if (value === '3') {
    document.querySelector('code.language-c').innerText=`
    // C program for insertion sort
#include <math.h>
#include <stdio.h>

/* Function to sort an array using insertion sort*/
void insertionSort(int arr[], int n)
{
  int i, key, j;
  for (i = 1; i < n; i++) {
    key = arr[i];
    j = i - 1;

    /* Move elements of arr[0..i-1], that are
    greater than key, to one position ahead
    of their current position */
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
}

// A utility function to print an array of size n
void printArray(int arr[], int n)
{
  int i;
  for (i = 0; i < n; i++)
    printf("%d ", arr[i]);
  printf("\n");
}

/* Driver program to test insertion sort */
int main()
{
  int arr[] = { 12, 11, 13, 5, 6 };
  int n = sizeof(arr) / sizeof(arr[0]);

  insertionSort(arr, n);
  printArray(arr, n);

  return 0;
}


    `
  }
  if (value === '4') {
    document.querySelector('code.language-c').innerText=`
    /* C program for Merge Sort */
#include <stdio.h>
#include <stdlib.h>

// Merges two subarrays of arr[].
// First subarray is arr[l..m]
// Second subarray is arr[m+1..r]
void merge(int arr[], int l, int m, int r)
{
  int i, j, k;
  int n1 = m - l + 1;
  int n2 = r - m;

  /* create temp arrays */
  int L[n1], R[n2];

  /* Copy data to temp arrays L[] and R[] */
  for (i = 0; i < n1; i++)
    L[i] = arr[l + i];
  for (j = 0; j < n2; j++)
    R[j] = arr[m + 1 + j];

  /* Merge the temp arrays back into arr[l..r]*/
  i = 0; // Initial index of first subarray
  j = 0; // Initial index of second subarray
  k = l; // Initial index of merged subarray
  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    }
    else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }

  /* Copy the remaining elements of L[], if there
  are any */
  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }

  /* Copy the remaining elements of R[], if there
  are any */
  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
}

/* l is for left index and r is right index of the
sub-array of arr to be sorted */
void mergeSort(int arr[], int l, int r)
{
  if (l < r) {
    // Same as (l+r)/2, but avoids overflow for
    // large l and h
    int m = l + (r - l) / 2;

    // Sort first and second halves
    mergeSort(arr, l, m);
    mergeSort(arr, m + 1, r);

    merge(arr, l, m, r);
  }
}

/* UTILITY FUNCTIONS */
/* Function to print an array */
void printArray(int A[], int size)
{
  int i;
  for (i = 0; i < size; i++)
    printf("%d ", A[i]);
  printf("\n");
}

/* Driver code */
int main()
{
  int arr[] = { 12, 11, 13, 5, 6, 7 };
  int arr_size = sizeof(arr) / sizeof(arr[0]);

  printf("Given array is \n");
  printArray(arr, arr_size);

  mergeSort(arr, 0, arr_size - 1);

  printf("\nSorted array is \n");
  printArray(arr, arr_size);
  return 0;
}


    `

  }
  if (value === '5') {
    document.querySelector('code.language-c').innerText=`
    /* C++ implementation of QuickSort */
#include <bits/stdc++.h>
using namespace std;

// A utility function to swap two elements
void swap(int* a, int* b)
{
  int t = *a;
  *a = *b;
  *b = t;
}

/* This function takes last element as pivot, places
the pivot element at its correct position in sorted
array, and places all smaller (smaller than pivot)
to left of pivot and all greater elements to right
of pivot */
int partition (int arr[], int low, int high)
{
  int pivot = arr[high]; // pivot
  int i = (low - 1); // Index of smaller element and indicates the right position of pivot found so far

  for (int j = low; j <= high - 1; j++)
  {
    // If current element is smaller than the pivot
    if (arr[j] < pivot)
    {
      i++; // increment index of smaller element
      swap(&arr[i], &arr[j]);
    }
  }
  swap(&arr[i + 1], &arr[high]);
  return (i + 1);
}

/* The main function that implements QuickSort
arr[] --> Array to be sorted,
low --> Starting index,
high --> Ending index */
void quickSort(int arr[], int low, int high)
{
  if (low < high)
  {
    /* pi is partitioning index, arr[p] is now
    at right place */
    int pi = partition(arr, low, high);

    // Separately sort elements before
    // partition and after partition
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
}

/* Function to print an array */
void printArray(int arr[], int size)
{
  int i;
  for (i = 0; i < size; i++)
    cout << arr[i] << " ";
  cout << endl;
}

// Driver Code
int main()
{
  int arr[] = {10, 7, 8, 9, 1, 5};
  int n = sizeof(arr) / sizeof(arr[0]);
  quickSort(arr, 0, n - 1);
  cout << "Sorted array: \n";
  printArray(arr, n);
  return 0;
}

// This code is contributed by rathbhupendra


    `
  }
}


document.querySelector(".icon").addEventListener("click", response);
document.querySelector(".start").addEventListener("click", start);
document.querySelector(".size-menu").addEventListener("change", RenderScreen);
// document.querySelector(".algo-menu").addEventListener("change", RenderScreen);
// window.onload = RenderScreen;

// =============================
// COPY PASTE
// ===========================
function myCopyFun() {

  /* Get the text field */
  var copyText = document.querySelector('.code-container pre code');
  let value = document.querySelector('#menu').value;
  
  
  if (value == '1') {
    navigator.clipboard.writeText(`

// C program for implementation of Bubble sort
#include <stdio.h>

void swap(int* xp, int* yp)
{
  int temp = *xp;
  *xp = *yp;
  *yp = temp;
}

// A function to implement bubble sort
void bubbleSort(int arr[], int n)
{
  int i, j;
  for (i = 0; i < n - 1; i++)

    // Last i elements are already in place
    for (j = 0; j < n - i - 1; j++)
      if (arr[j] > arr[j + 1])
        swap(&arr[j], &arr[j + 1]);
}

/* Function to print an array */
void printArray(int arr[], int size)
{
  int i;
  for (i = 0; i < size; i++)
    printf("%d ", arr[i]);
  printf("\n");
}

// Driver program to test above functions
int main()
{
  int arr[] = { 64, 34, 25, 12, 22, 11, 90 };
  int n = sizeof(arr) / sizeof(arr[0]);
  bubbleSort(arr, n);
  printf("Sorted array: \n");
  printArray(arr, n);
  return 0;
}



    `)
  }
  if (value === '2') {
    navigator.clipboard.writeText(`

    // C program for implementation of selection sort
#include <stdio.h>

void swap(int *xp, int *yp)
{
  int temp = *xp;
  *xp = *yp;
  *yp = temp;
}

void selectionSort(int arr[], int n)
{
  int i, j, min_idx;

  // One by one move boundary of unsorted subarray
  for (i = 0; i < n-1; i++)
  {
    // Find the minimum element in unsorted array
    min_idx = i;
    for (j = i+1; j < n; j++)
    if (arr[j] < arr[min_idx])
      min_idx = j;

    // Swap the found minimum element with the first element
    swap(&arr[min_idx], &arr[i]);
  }
}

/* Function to print an array */
void printArray(int arr[], int size)
{
  int i;
  for (i=0; i < size; i++)
    printf("%d ", arr[i]);
  printf("\n");
}

// Driver program to test above functions
int main()
{
  int arr[] = {64, 25, 12, 22, 11};
  int n = sizeof(arr)/sizeof(arr[0]);
  selectionSort(arr, n);
  printf("Sorted array: \n");
  printArray(arr, n);
  return 0;
}
`)
  }
  if (value === '3') {
    navigator.clipboard.writeText(`
    // C program for insertion sort
#include <math.h>
#include <stdio.h>

/* Function to sort an array using insertion sort*/
void insertionSort(int arr[], int n)
{
  int i, key, j;
  for (i = 1; i < n; i++) {
    key = arr[i];
    j = i - 1;

    /* Move elements of arr[0..i-1], that are
    greater than key, to one position ahead
    of their current position */
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
}

// A utility function to print an array of size n
void printArray(int arr[], int n)
{
  int i;
  for (i = 0; i < n; i++)
    printf("%d ", arr[i]);
  printf("\n");
}

/* Driver program to test insertion sort */
int main()
{
  int arr[] = { 12, 11, 13, 5, 6 };
  int n = sizeof(arr) / sizeof(arr[0]);

  insertionSort(arr, n);
  printArray(arr, n);

  return 0;
}


    `)
  }
  if (value === '4') {
    navigator.clipboard.writeText(`
    /* C program for Merge Sort */
#include <stdio.h>
#include <stdlib.h>

// Merges two subarrays of arr[].
// First subarray is arr[l..m]
// Second subarray is arr[m+1..r]
void merge(int arr[], int l, int m, int r)
{
  int i, j, k;
  int n1 = m - l + 1;
  int n2 = r - m;

  /* create temp arrays */
  int L[n1], R[n2];

  /* Copy data to temp arrays L[] and R[] */
  for (i = 0; i < n1; i++)
    L[i] = arr[l + i];
  for (j = 0; j < n2; j++)
    R[j] = arr[m + 1 + j];

  /* Merge the temp arrays back into arr[l..r]*/
  i = 0; // Initial index of first subarray
  j = 0; // Initial index of second subarray
  k = l; // Initial index of merged subarray
  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    }
    else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }

  /* Copy the remaining elements of L[], if there
  are any */
  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }

  /* Copy the remaining elements of R[], if there
  are any */
  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
}

/* l is for left index and r is right index of the
sub-array of arr to be sorted */
void mergeSort(int arr[], int l, int r)
{
  if (l < r) {
    // Same as (l+r)/2, but avoids overflow for
    // large l and h
    int m = l + (r - l) / 2;

    // Sort first and second halves
    mergeSort(arr, l, m);
    mergeSort(arr, m + 1, r);

    merge(arr, l, m, r);
  }
}

/* UTILITY FUNCTIONS */
/* Function to print an array */
void printArray(int A[], int size)
{
  int i;
  for (i = 0; i < size; i++)
    printf("%d ", A[i]);
  printf("\n");
}

/* Driver code */
int main()
{
  int arr[] = { 12, 11, 13, 5, 6, 7 };
  int arr_size = sizeof(arr) / sizeof(arr[0]);

  printf("Given array is \n");
  printArray(arr, arr_size);

  mergeSort(arr, 0, arr_size - 1);

  printf("\nSorted array is \n");
  printArray(arr, arr_size);
  return 0;
}


    `);

  }
  if (value === '5') {
    navigator.clipboard.writeText(`
    /* C++ implementation of QuickSort */
#include <bits/stdc++.h>
using namespace std;

// A utility function to swap two elements
void swap(int* a, int* b)
{
  int t = *a;
  *a = *b;
  *b = t;
}

/* This function takes last element as pivot, places
the pivot element at its correct position in sorted
array, and places all smaller (smaller than pivot)
to left of pivot and all greater elements to right
of pivot */
int partition (int arr[], int low, int high)
{
  int pivot = arr[high]; // pivot
  int i = (low - 1); // Index of smaller element and indicates the right position of pivot found so far

  for (int j = low; j <= high - 1; j++)
  {
    // If current element is smaller than the pivot
    if (arr[j] < pivot)
    {
      i++; // increment index of smaller element
      swap(&arr[i], &arr[j]);
    }
  }
  swap(&arr[i + 1], &arr[high]);
  return (i + 1);
}

/* The main function that implements QuickSort
arr[] --> Array to be sorted,
low --> Starting index,
high --> Ending index */
void quickSort(int arr[], int low, int high)
{
  if (low < high)
  {
    /* pi is partitioning index, arr[p] is now
    at right place */
    int pi = partition(arr, low, high);

    // Separately sort elements before
    // partition and after partition
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
}

/* Function to print an array */
void printArray(int arr[], int size)
{
  int i;
  for (i = 0; i < size; i++)
    cout << arr[i] << " ";
  cout << endl;
}

// Driver Code
int main()
{
  int arr[] = {10, 7, 8, 9, 1, 5};
  int n = sizeof(arr) / sizeof(arr[0]);
  quickSort(arr, 0, n - 1);
  cout << "Sorted array: \n";
  printArray(arr, n);
  return 0;
}

// This code is contributed by rathbhupendra


    `);
  }
  
 
  
  // .then(
  //     function () {
  //      alert("code copied to clipboard");
  //     },
  //     function () {
  //       alert("copy failed");
  //     }
  // );


}